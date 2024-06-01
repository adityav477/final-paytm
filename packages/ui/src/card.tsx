
export default function Card({ title, children }:
  {
    title: string,
    children: React.ReactNode
  }): JSX.Element {
  return (
    <div className="w-full px-8 bg-gray-50 rounded-xl p-6 m-2">
      <h1 className="text-2xl font-semibold rounded-lg ">{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}
