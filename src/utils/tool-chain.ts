export type Partial<T> = {
    [P in keyof T]?: T[P]
}

export type Required<T> = {
    [P in keyof T]-?: T[P]
}
// 将T的所有属性的readonly移除
export type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
}

export type Readonly<T> = {
    +readonly [P in keyof T]: T[P]
}
// 将K中所有的属性转化为T类型
export type Record<K extends keyof any, T> = {
    [P in K]: T
}
// 从T中取出一系列K的属性
export type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

export type Exclude<T, U> = T extends U ? never : T

export type Extract<T, U> = T extends U ? T : never

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
// infer R 声明一个变量来承载传入函数签名的返回值
export type ReturnType<T> = T extends (
    ...args: any[]
) => infer R ? R : any
