export default function UserInput({ label, name, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}