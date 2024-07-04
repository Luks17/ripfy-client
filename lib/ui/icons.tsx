import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";

export type AntDesignIcon = keyof typeof AntDesign.glyphMap;
export type EntypoIcon = keyof typeof Entypo.glyphMap;
export type MaterialIcon = keyof typeof MaterialIcons.glyphMap;

interface Props {
  icon: AntDesignIcon | EntypoIcon | MaterialIcon;
  size: number;
  color: string;
}

export default function RenderIcon({ icon, size, color }: Props) {
  if (icon in AntDesign.glyphMap) {
    return <AntDesign name={icon as AntDesignIcon} size={size} color={color} />;
  } else if (icon in Entypo.glyphMap) {
    return <Entypo name={icon as EntypoIcon} size={size} color={color} />;
  } else {
    return (
      <MaterialIcons name={icon as MaterialIcon} size={size} color={color} />
    );
  }
}
