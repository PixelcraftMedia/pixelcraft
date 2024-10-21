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
				<div >
					<div >
						<div >
							<Link
								
								href="/"
								onClick={() => {
									props.setIsOpen(false);
									props.setIsOpenDropdown(false);
									props.setIsOpenDropdownLanguage(false);
								}}
							>
								<div >
									<SwitchLogo  logo={logo} />
								</div>
							</Link>
							<p>
							Servicii principale: otomicroscopie, otoscopie, rinoscopie, fibroscopie, timpanogramă, DPOAE.
							</p>
						</div>
						<div >
							<h4>
								<FormattedMessage id="page.footer.block_2.title" />
							</h4>
							<a  href="#">
								<FormattedMessage id="page.footer.block_2.text_1" />
							</a>
							<a  href="#service">
								<FormattedMessage id="page.footer.block_2.text_2" />
							</a>
							<a  href="#about">
								<FormattedMessage id="page.footer.block_2.text_3" />
							</a>
							<a  href="#contact">
								<FormattedMessage id="page.footer.block_2.text_4" />
							</a>
						</div>
						<div >
							<h4>
								<FormattedMessage id="page.footer.block_3.title" />
							</h4>
							<a  href="#service">
								<FormattedMessage id="page.footer.block_3.text_1" />
							</a>
						
						</div>
						<div >
							<h4>
								<FormattedMessage id="page.footer.block_4.title" />
							</h4>
							{/*<a className={scss.link__text} href="#">*/}
							{/*	boss.armsport@gmail.com*/}
							{/*</a>*/}
							<a  href="tel:+40724955956">
							+40724955956
							</a>
						
						</div>
					</div>
					<hr />
					<div >
						<div >© 2019-2024 / Toate drepturile rezervate.</div>
						<div >
							<a
								
								href="#"
								target="_blank"
								aria-label="Link to Instagram profile"
							>
								<InstagramIcon />
							</a>
							<a
								
								href="#"
								target="_blank"
								aria-label="Link to WhatApp profile"
							>
								<WhatAppIcon />
							</a>
							<a
								
								href="#"
								target="_blank"
								aria-label="Link to Telegram Call"
							>
								<TelegramIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
