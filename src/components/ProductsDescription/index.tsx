import { useEffect, useState } from "react";
import * as S from "./styles";

interface DescriptionProps {
    currency: string;
    print: boolean;
}

export default function ProductsDescription({
    currency,
    print,
}: DescriptionProps) {
    const [items, setItems] = useState<any[]>([
        { qty: 10, description: "Gadget", discount: 0, cost: 9.95 },
    ]);
    const [totalList, setTotalList] = useState<number[]>([]);
    const [tax, setTax] = useState<any>(13);

    useEffect(() => {
        const output: any[] = [];
        items.forEach((item) => {
            output.push(
                item.qty * item.cost -
                    (item.qty * item.cost * item.discount) / 100
            );
            console.log(
                "output",
                item.qty * item.cost -
                    (item.qty * item.cost * item.discount) / 100
            );
        });
        setTotalList(output);
    }, [items]);

    return (
        <S.Table style={{ width: "100%" }}>
            {
                // * header
                <S.Tr>
                    <S.Td left />
                    <S.Td>
                        <S.Text weight="bold" color="#313233">
                            Description
                        </S.Text>
                    </S.Td>
                    <S.Td>
                        <S.Text weight="bold" color="#313233">
                            Discount
                        </S.Text>
                    </S.Td>
                    <S.Td>
                        <S.Text weight="bold" color="#313233">
                            Quantity
                        </S.Text>
                    </S.Td>
                    <S.Td>
                        <S.Text weight="bold" color="#313233">
                            Cost {currency}
                        </S.Text>
                    </S.Td>
                    <S.Td right>
                        <S.Text align="right" color="#313233" weight="bold">
                            Total
                        </S.Text>
                    </S.Td>
                </S.Tr>
            }
            {
                // * list of products
                items.map((item, idx) => (
                    <S.Tr dark={idx % 2 === 0}>
                        <S.Td left>
                            {!print ? (
                                <S.Button
                                    red
                                    onClick={() => {
                                        setItems(
                                            items.filter((i) => i !== item)
                                        );
                                    }}
                                >
                                    [X]
                                </S.Button>
                            ) : (
                                <S.Line width="50px" />
                            )}
                        </S.Td>
                        <S.Td>
                            <S.Input
                                placeholder="Description"
                                value={item.description}
                                onChange={(e) =>
                                    setItems(
                                        items.map((i) =>
                                            i === item
                                                ? {
                                                      ...i,
                                                      description:
                                                          e.target.value,
                                                  }
                                                : i
                                        )
                                    )
                                }
                            />
                        </S.Td>
                        <S.Td>
                            <S.Line justify="start">
                                <S.NumberInput
                                    width="60px"
                                    decimalSeparator="."
                                    defaultValue={0}
                                    value={item.discount}
                                    onValueChange={(value, name) =>
                                        setItems(
                                            items.map((i) =>
                                                i === item
                                                    ? {
                                                          ...i,
                                                          discount: value
                                                              ? value
                                                              : 0,
                                                      }
                                                    : i
                                            )
                                        )
                                    }
                                />
                                <S.Text>%</S.Text>
                            </S.Line>
                        </S.Td>
                        <S.Td>
                            <S.NumberInput
                                width="80px"
                                value={item.qty}
                                decimalSeparator="."
                                defaultValue={0}
                                onValueChange={(value, name) =>
                                    setItems(
                                        items.map((i) =>
                                            i === item
                                                ? {
                                                      ...i,
                                                      qty: value ? value : 0,
                                                  }
                                                : i
                                        )
                                    )
                                }
                            />
                        </S.Td>
                        <S.Td>
                            <S.NumberInput
                                width="80px"
                                value={item.cost}
                                defaultValue={0}
                                decimalSeparator="."
                                onValueChange={(value, name) =>
                                    setItems(
                                        items.map((i) =>
                                            i === item
                                                ? {
                                                      ...i,
                                                      cost: value ? value : 0,
                                                  }
                                                : i
                                        )
                                    )
                                }
                            />
                        </S.Td>
                        <S.Td right>
                            <S.Text align="right" size="14px">
                                {currency}
                                {(
                                    item.qty * item.cost -
                                    (item.qty * item.cost * item.discount) / 100
                                ).toFixed(2)}
                            </S.Text>
                        </S.Td>
                    </S.Tr>
                ))
            }
            {!print && (
                <S.Tr dark={items.length % 2 === 0}>
                    <S.Td left>
                        <S.Button
                            onClick={() =>
                                setItems([
                                    ...items,
                                    {
                                        qty: 0,
                                        description: "",
                                        discount: 0,
                                        cost: 0,
                                    },
                                ])
                            }
                        >
                            [+]
                        </S.Button>
                    </S.Td>
                </S.Tr>
            )}
            <S.Tr dark={(items.length + 1) % 2 === 0}>
                <S.Td left />
                <S.Td />
                <S.Td />
                <S.Td />
                <S.Td>
                    <S.Line width="100px" justify="end">
                        Sub Total
                    </S.Line>
                </S.Td>
                <S.Td right>
                    <S.Text align="right">
                        {currency}
                        {totalList
                            .reduce((acc, item) => acc + item, 0)
                            .toFixed(2)}
                    </S.Text>
                </S.Td>
            </S.Tr>
            <S.Tr dark={(items.length + 2) % 2 === 0}>
                <S.Td left />
                <S.Td />
                <S.Td />
                <S.Td />
                <S.Td>
                    <S.Line width="100px" justify="end">
                        <S.Text>Tax(%):</S.Text>
                        <S.NumberInput
                            defaultValue={0}
                            width="40px"
                            value={tax}
                            decimalSeparator="."
                            decimalsLimit={2}
                            onValueChange={(value, name) =>
                                setTax(value ? value : 0)
                            }
                        />
                    </S.Line>
                </S.Td>
                <S.Td right>
                    <S.Text align="right">
                        {currency}
                        {(
                            totalList.reduce((acc, item) => acc + item, 0) *
                            (tax / 100)
                        ).toFixed(2)}
                    </S.Text>
                </S.Td>
            </S.Tr>
            <S.Tr dark={(items.length + 3) % 2 === 0}>
                <S.Td left />
                <S.Td />
                <S.Td />
                <S.Td />
                <S.Td>
                    <S.Text width="100px" align="right">
                        Grand Total
                    </S.Text>
                </S.Td>
                <S.Td right>
                    <S.Text align="right">
                        {(
                            totalList.reduce((acc, item) => acc + item, 0) *
                                (tax / 100) +
                            totalList.reduce((acc, item) => acc + item, 0)
                        ).toFixed(2)}
                    </S.Text>
                </S.Td>
            </S.Tr>
        </S.Table>
    );
}
