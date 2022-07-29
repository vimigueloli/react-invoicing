import { useEffect, useState } from "react";
import * as S from "./styles";
import * as G from "globalStyles";

interface DescriptionProps {
    currency: string;
    print: boolean;
}

interface Product {
    qty: number | string;
    description: string;
    discount: number | string;
    cost: number | string;
}

export default function ProductsDescription({
    currency,
    print,
}: DescriptionProps) {
    const [totalList, setTotalList] = useState<number[]>([]);
    const [tax, setTax] = useState<number | string>(13);
    const [items, setItems] = useState<Product[]>([
        { qty: 10, description: "Gadget", discount: 0, cost: 9.95 },
    ]);

    // ? calculate the total of each item and save it
    useEffect(() => {
        const output: any[] = [];
        items.forEach((item) => {
            output.push(
                Number(item.qty) * Number(item.cost) -
                    (Number(item.qty) *
                        Number(item.cost) *
                        Number(item.discount)) /
                        100
            );
            console.log(
                "output",
                Number(item.qty) * Number(item.cost) -
                    (Number(item.qty) *
                        Number(item.cost) *
                        Number(item.discount)) /
                        100
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
                        <G.Text weight="bold" color="#313233">
                            Description
                        </G.Text>
                    </S.Td>
                    <S.Td>
                        <G.Text weight="bold" color="#313233">
                            Discount(%)
                        </G.Text>
                    </S.Td>
                    <S.Td>
                        <G.Text weight="bold" color="#313233">
                            Quantity
                        </G.Text>
                    </S.Td>
                    <S.Td>
                        <G.Text weight="bold" color="#313233">
                            Cost {currency}
                        </G.Text>
                    </S.Td>
                    <S.Td right>
                        <G.Text align="right" color="#313233" weight="bold">
                            Total
                        </G.Text>
                    </S.Td>
                </S.Tr>
            }
            {
                // * list of products
                items.map((item, idx) => (
                    <S.Tr dark={idx % 2 === 0}>
                        <S.Td left>
                            {!print ? (
                                <G.Button
                                    red
                                    onClick={() => {
                                        setItems(
                                            items.filter((i) => i !== item)
                                        );
                                    }}
                                >
                                    [X]
                                </G.Button>
                            ) : (
                                <G.Line width="50px" />
                            )}
                        </S.Td>
                        <S.Td>
                            <G.Input
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
                            <G.Line justify="start">
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
                            </G.Line>
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
                            <G.Text align="right" size="14px">
                                {currency}
                                {(
                                    Number(item.qty) * Number(item.cost) -
                                    (Number(item.qty) *
                                        Number(item.cost) *
                                        Number(item.discount)) /
                                        100
                                ).toFixed(2)}
                            </G.Text>
                        </S.Td>
                    </S.Tr>
                ))
            }
            {
                // * add item row
                !print && (
                    <S.Tr dark={items.length % 2 === 0}>
                        <S.Td left>
                            <G.Button
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
                            </G.Button>
                        </S.Td>
                    </S.Tr>
                )
            }
            {
                // * subtotal row
                <S.Tr dark={(items.length + 1) % 2 === 0}>
                    <S.Td left />
                    <S.Td />
                    <S.Td />
                    <S.Td />
                    <S.Td>
                        <G.Line width="100px" justify="end">
                            Sub Total
                        </G.Line>
                    </S.Td>
                    <S.Td right>
                        <G.Text align="right">
                            {currency}
                            {totalList
                                .reduce((acc, item) => acc + item, 0)
                                .toFixed(2)}
                        </G.Text>
                    </S.Td>
                </S.Tr>
            }
            {
                // * tax row
                <S.Tr dark={(items.length + 2) % 2 === 0}>
                    <S.Td left />
                    <S.Td />
                    <S.Td />
                    <S.Td />
                    <S.Td>
                        <G.Line width="100px" justify="end">
                            <G.Text>Tax(%):</G.Text>
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
                        </G.Line>
                    </S.Td>
                    <S.Td right>
                        <G.Text align="right">
                            {currency}
                            {(
                                totalList.reduce((acc, item) => acc + item, 0) *
                                (Number(tax) / 100)
                            ).toFixed(2)}
                        </G.Text>
                    </S.Td>
                </S.Tr>
            }
            {
                // * grandtotal row
                <S.Tr dark={(items.length + 3) % 2 === 0}>
                    <S.Td left />
                    <S.Td />
                    <S.Td />
                    <S.Td />
                    <S.Td>
                        <G.Text width="100px" align="right">
                            Grand Total
                        </G.Text>
                    </S.Td>
                    <S.Td right>
                        <G.Text align="right">
                            {(
                                totalList.reduce((acc, item) => acc + item, 0) *
                                    (Number(tax) / 100) +
                                totalList.reduce((acc, item) => acc + item, 0)
                            ).toFixed(2)}
                        </G.Text>
                    </S.Td>
                </S.Tr>
            }
        </S.Table>
    );
}
