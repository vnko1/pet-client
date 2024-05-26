import { FC } from "react";
import IcoMoon, { IconProps } from "react-icomoon";

import iconSet from "@/assets/icons/selection.json";

const Icon: FC<IconProps> = (props) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
