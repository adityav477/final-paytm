
export default function Select({ onSelect, options }: {
  onSelect: (value: string) => void,
  options: {
    key: string,
    value: string,
  }[]
}): JSX.Element {
  return (
    <div className="w-full " >
      <select onChange={(e) => {
        onSelect(e.target.value);
      }} className="w-full border-2 border-slate-200 rounded-md px-2 py-2">

        {options.map((option) => {
          return <option key={option.key} value={option.key} >{option.value}</option>
        })}

      </select>
    </div>
  )
}
