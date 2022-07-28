import { numberMask } from "components/masks";
import { useState } from "react";
import * as S from "./styles";

interface DescriptionProps {
    currency: string;
    print: boolean;
}

interface ProductProps {
    qty: number;
    description: string;
    cost: number;
}

export default function ProductsDescription({
    currency,
    print,
}: DescriptionProps) {
    const [items, setItems] = useState<ProductProps[]>([
        { qty: 10, description: "Gadget", cost: 9.95 },
    ]);
    const [tax, setTax] = useState(13);

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
                    <S.Td />
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
                        <S.Td />
                        <S.Td>
                            <S.Input
                                width="80px"
                                value={item.qty}
                                onChange={(e) =>
                                    setItems(
                                        items.map((i) =>
                                            i === item
                                                ? {
                                                      ...i,
                                                      qty: Number(
                                                          numberMask(
                                                              e.target.value
                                                          )
                                                      ),
                                                  }
                                                : i
                                        )
                                    )
                                }
                            />
                        </S.Td>
                        <S.Td>
                            <S.Input
                                width="80px"
                                value={item.cost}
                                onChange={(e) =>
                                    setItems(
                                        items.map((i) =>
                                            i === item
                                                ? {
                                                      ...i,
                                                      cost: Number(
                                                          numberMask(
                                                              e.target.value
                                                          )
                                                      ),
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
                                {item.qty * item.cost}
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
                                    { qty: 0, description: "", cost: 0 },
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
                        {items
                            .reduce(
                                (acc, item) => acc + item.qty * item.cost,
                                0
                            )
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
                        <S.Input
                            width="40px"
                            value={tax}
                            onChange={(e) => setTax(Number(e.target.value))}
                        />
                    </S.Line>
                </S.Td>
                <S.Td right>
                    <S.Text align="right">
                        {currency}
                        {(
                            items.reduce(
                                (acc, item) => acc + item.qty * item.cost,
                                0
                            ) *
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
                            items.reduce(
                                (acc, item) => acc + item.qty * item.cost,
                                0
                            ) *
                                (tax / 100) +
                            items.reduce(
                                (acc, item) => acc + item.qty * item.cost,
                                0
                            )
                        ).toFixed(2)}
                    </S.Text>
                </S.Td>
            </S.Tr>
        </S.Table>
    );
}
