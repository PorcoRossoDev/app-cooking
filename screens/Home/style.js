import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    list: {
        flex: 1,
        justifyContent: 'space-between', // tạo khoảng trống giữa 2 cột
    },
})

export default styles