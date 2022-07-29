import * as S from "./styles";

interface CurrencyOptionProps {
    symbol: string;
    name: string;
}

interface CurrencySelectProps {
    items: CurrencyOptionProps[];
    onChange: Function;
    initialValue: number;
}

export default function CurrencySelect({
    items,
    onChange,
    initialValue,
}: CurrencySelectProps) {
    return (
        <S.Select onChange={(e) => onChange(e.target.value)}>
            {items.map((item, idx) => (
                <option
                    key={idx}
                    selected={initialValue === idx}
                    value={item.symbol}
                >
                    {item.name}
                </option>
            ))}
        </S.Select>
    );
}
