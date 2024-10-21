import React, { FC } from "react";

import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";
import SwitchLogo from "@/components/theme/SwitchLogo";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { IsOpenProps } from "@/components/layout/Layout";



interface FooterProps extends IsOpenProps {
	
	logo: string;
	
}
const Footer: FC<FooterProps> = (props) => {
	const { logo } = props;
	return (
		<div >
			<div className="container bg-black mx-11">
				
		</div></div>
	);
};
export default Footer;
