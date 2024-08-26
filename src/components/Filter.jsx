export default function Filter({ value, onChange }) {
  return (
    <>
      <form>
        <input
          type="text"
          value={value}
          name="query"
          onChange={(evt) => onChange(evt.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
