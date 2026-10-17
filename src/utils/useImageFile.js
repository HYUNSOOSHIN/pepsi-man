import { useState, useEffect, useCallback } from "react"

// 선택한 이미지 파일과 미리보기 URL 관리
// 미리보기는 base64(FileReader) 대신 object URL을 사용하고, 바뀌거나 언마운트될 때 해제한다
export default function useImageFile() {
  const [file, setFile] = useState(null)
  const [fileData, setFileData] = useState("")

  useEffect(() => {
    if (typeof fileData !== "string" || !fileData.startsWith("blob:")) return
    return () => URL.revokeObjectURL(fileData)
  }, [fileData])

  const selectFile = useCallback((e) => {
    const selected = e.target.files[0]
    if (!selected) return
    setFile(selected)
    setFileData(URL.createObjectURL(selected))
  }, [])

  const clearFile = useCallback(() => {
    setFile(null)
    setFileData("")
  }, [])

  return { file, fileData, setFileData, selectFile, clearFile }
}
