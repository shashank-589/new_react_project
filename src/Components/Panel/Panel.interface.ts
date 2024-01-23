export interface IPanelOptions {
    idx: number,
    label: string,
    image: any
    path: string,
    children?: { label: string, path: string }[]
}