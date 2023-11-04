
interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  }
  
  export default function Input({value, onChange}: Props) {
    return (
      <input
        type="text" 
        value={value}
        onChange={onChange}
        className="border p-2" 
      />
    )
  }