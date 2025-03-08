import React from "react";
import { CATEGORIES } from "@/utils/data";
import { FlashList } from "@shopify/flash-list";
import Item from "@/components/Item";

const MainMenu = () => {
    return (
        <FlashList
            data={CATEGORIES}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id.toString()} // Ensure items have a unique key
            estimatedItemSize={50} // Adjust for more accurate performance
            numColumns={1}
        />
    );
};

export default MainMenu;
