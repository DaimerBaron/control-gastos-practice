import  {currencyFormat}  from '../helpers/index'

type AmountDisplayProps = {
    label?: string;
    amount: number;
}

function AmountDisplay({label, amount}: AmountDisplayProps) {
  return (
    <p>
        {label && `${label}: `}
        <span className="font-bold">{currencyFormat(amount)}</span>    
    </p>
  )
}

export default AmountDisplay