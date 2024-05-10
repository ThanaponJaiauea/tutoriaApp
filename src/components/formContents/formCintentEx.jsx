/** @format */

import ModelContent from "../modelContent"

const FormCintentEx = ({selectedMenu}) => {
  const getTitle = () => {
    switch (selectedMenu) {
      case "submitAddalipay":
        return "submitAddalipay()"
      default:
        return ""
    }
  }

  const formCintentEx = {
    submitAddalipay: () => (
      <ModelContent
        headers="Arithmetic"
        headerHtml="alipayAdd"
        contentModelStructure="-"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck="show"
        headerName={getTitle()}
        functionName={getTitle()}
      />
    ),
  }

  return (
    formCintentEx[selectedMenu] && formCintentEx[selectedMenu]()
  )
}

export default FormCintentEx
