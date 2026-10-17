import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
}

firebase.initializeApp(firebaseConfig)

export const firebaseInstance = firebase

export const authService = firebase.auth()
export const dbService = firebase.firestore()
export const storageService = firebase.storage()

// 문서 전체를 덮어쓰지 않고 카운터 필드만 원자적으로 증감
export const increment = (n) => firebase.firestore.FieldValue.increment(n)

// base64 변환 없이 원본 파일 그대로 업로드. 파일명 충돌로 덮어쓰지 않도록 타임스탬프를 붙인다
export const uploadImage = async (dir, file) => {
  const fileRef = storageService.ref().child(`${dir}/${Date.now()}_${file.name}`)
  const snapshot = await fileRef.put(file, { contentType: file.type })
  return snapshot.ref.getDownloadURL()
}
