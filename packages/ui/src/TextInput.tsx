
export default function TextInput({ label, placeholder, onChange }: {
  label: string,
  placeholder: string,
  onChange: (value: string) => void
}): JSX.Element {
  return (
    <div className="flex flex-col justify-center gap-2 mt-4">
      <div className="font-semibold">
        {label}
      </div>

      <input type="number" placeholder={placeholder} className="border-2 border-slate-200 rounded-md px-2 py-2" onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
