import { user_role } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type Tmeta = {
    page: number;
    limit: number;
    total: number;
}

export type UserRole = keyof typeof user_role

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
    child?: DrawerItem[]
}