
export interface Categories {
    id: number,
    name: string
}

export interface ButtonProps {
    isSelected: boolean
}

export interface SearchBarProps {
    handleSelectCategory(id: number): void;
    category: number

}