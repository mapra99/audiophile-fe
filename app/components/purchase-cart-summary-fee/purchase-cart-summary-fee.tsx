import { Text } from '~/components'
import formatCurrency from '~/utils/format-currency'

import type { PurchaseCartSummaryFeeProps } from './types'

const PurchaseCartSummaryFee = ({ label, value }: PurchaseCartSummaryFeeProps) => {
  return (
    <div className="flex justify-between">
      <Text variant="body" as="span" className="text-black opacity-50 uppercase font-medium">
        { label }
      </Text>

      <Text variant="body" as="span" className="!font-bold">
        { formatCurrency(value) }
      </Text>
    </div>
  )
}

export default PurchaseCartSummaryFee
