import { registerPartial } from "../../utils/register-partial";

import template from "./button.hbs";
import * as style from "./style.module.scss";

registerPartial({ name: "button", template, style });
