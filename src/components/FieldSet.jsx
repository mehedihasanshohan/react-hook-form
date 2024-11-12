/* eslint-disable react/prop-types */

const FieldSet = ({label, children}) => {

  return (
    <>
        <fieldset>
          {label && <legend>{label}</legend>}
          <div>{children}</div>
        </fieldset>
    </>
  )
}

export default FieldSet