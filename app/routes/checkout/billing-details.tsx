import { Link, Form, useActionData } from '@remix-run/react'
import { json, redirect } from '@remix-run/node'
import { Text, TextInput, Button } from '~/components'
import useMaskedInput from '~/hooks/use-masked-input'
import { signUp } from '~/models/auth'
import * as SessionStorage from '~/utils/session-storage'
import formDataToObject from '~/utils/form-data-to-object'
import RequestError from '~/errors/request-error'
import { PHONE_REGEXP } from '~/constants'

import type { ActionArgs } from '@remix-run/node'
import type { UserInfoPayload } from '~/models/auth'

interface ValidationErrors {
  general?: string
  name?: string
  email?: string
  phone?: string
}

const validateForm = (userInfo: UserInfoPayload) => {
  const errors: ValidationErrors = {}
  if (!userInfo.name) errors.name = 'Please enter your name'
  if (!userInfo.email) errors.email = 'Please enter your email'
  if (!userInfo.phone) errors.phone = 'Please enter your phone'
  if (!PHONE_REGEXP.test(userInfo.phone)) errors.phone = 'Please enter a valid nubmer'

  return errors
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const userInfo = formDataToObject(formData) as UserInfoPayload
  const { sessionId } = await SessionStorage.getOrCreateSessionId(request)

  const errors = validateForm(userInfo)
  if (Object.keys(errors).length) return json({ errors })

  try {
    await signUp(sessionId, userInfo)
  } catch (error) {
    if (!(error instanceof RequestError)) throw error
    errors.general = error.message
  }

  if (Object.keys(errors).length) return json({ errors })

  return redirect(`/checkout/confirmation-code?email=${encodeURIComponent(userInfo.email)}`)
}

export default () => {
  const result = useActionData<typeof action>()
  const errors: ValidationErrors = result ? result.errors : {}

  useMaskedInput({
    selector: 'input#phone',
    type: 'phone'
  })

  return (
    <div>
      <Text as="h3" variant="subtitle" className="mb-4">
        Billing Details
      </Text>

      <Form className="flex flex-col gap-6" method="post">
        <TextInput label="Name" id="name" name="name" placeholder="Enter your name" error={errors.name} />
        <TextInput label="Email Address" id="email" name="email" placeholder="email@example.com" type="email" error={errors.email} />
        <TextInput label="Phone Number" id="phone" name="phone" placeholder="+01 202-555-0136" type="phone" error={errors.phone} />
        { errors.general && (
          <Text as="p" variant="body" className="text-danger !text-xs">
            { errors.general }
          </Text>
        )}

        <Text variant="body" as="p">
          Already a user? <Link to="/checkout/login" className="text-orange underline hover:cursor-pointer">Login here</Link>
        </Text>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </div>
  )
}
