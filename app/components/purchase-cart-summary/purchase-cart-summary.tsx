import { Text, PurchaseCartSummaryItem, PurchaseCartSummaryFee } from '~/components'
import formatCurrency from '~/utils/format-currency'

import type { PurchaseCartSummaryProps } from './types'

const PurchaseCartSummary = ({ cart }: PurchaseCartSummaryProps) => {
  const { items, extra_fees, total_price } = cart
  const partialTotal = items.reduce((cumSum, item) => cumSum + item.price, 0)

  return (
    <div className="rounded-lg bg-white px-6 py-8 sm:p-8">
      <Text variant="heading-6" className="mb-8" as="h2">
        Summary
      </Text>

      <div className="flex flex-col gap-6 mb-8">
        { items.map(cartItem => (
          <PurchaseCartSummaryItem
            key={cartItem.uuid}
            cartItem={cartItem}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <PurchaseCartSummaryFee
          label="Total"
          value={partialTotal}
        />

        { extra_fees.map((extra_fee) => (
          <PurchaseCartSummaryFee
            key={extra_fee.key}
            label={extra_fee.key}
            value={extra_fee.price}
          />
        )) }
      </div>

      <PurchaseCartSummaryFee
        label="Grand Total"
        value={total_price}
      />
    </div>
  )
}

export default PurchaseCartSummary
