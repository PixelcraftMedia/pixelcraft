import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";
import SwitchLogo from "@/components/theme/SwitchLogo";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { IsOpenProps } from "@/components/layout/Layout";

interface FooterProps extends IsOpenProps {}

const Footer: FC<FooterProps> = (props) => {
	return (
		<div className={scss.footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.footer__top}>
						<div className={scss.block}>
							<Link
								className={scss.logo__link}
								href="/"
								onClick={() => {
									props.setIsOpen(false);
									props.setIsOpenDropdown(false);
									props.setIsOpenDropdownLanguage(false);
								}}
							>
								<div className={scss.bg}>
									<SwitchLogo className={scss.logoDevX} />
								</div>
							</Link>
							<p>
								<FormattedMessage id="page.footer.block_1.title" />
							</p>
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_2.title" />
							</h6>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_2.text_1" />
							</a>
							<a className={scss.link__text} href="#service">
								<FormattedMessage id="page.footer.block_2.text_2" />
							</a>
							<a className={scss.link__text} href="#about">
								<FormattedMessage id="page.footer.block_2.text_3" />
							</a>
							<a className={scss.link__text} href="#contact">
								<FormattedMessage id="page.footer.block_2.text_4" />
							</a>
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_3.title" />
							</h6>
							<a className={scss.link__text} href="#service">
								<FormattedMessage id="page.footer.block_3.text_1" />
							</a>
						
						</div>
						<div className={scss.block}>
							<h6>
								<FormattedMessage id="page.footer.block_4.title" />
							</h6>
							{/*<a className={scss.link__text} href="#">*/}
							{/*	boss.armsport@gmail.com*/}
							{/*</a>*/}
							<a className={scss.link__text} href="tel:+40724955956">
							+40724955956
							</a>
						
						</div>
					</div>
					<hr />
					<div className={scss.footer__bottom}>
						<div className={scss.copyright}>© 2019-2024 Cabinet ORL / Toate drepturile rezervate.</div>
						<div className={scss.icons}>
							<a
								className={scss.link}
								href="#"
								target="_blank"
								aria-label="Link to Instagram profile"
							>
								<InstagramIcon />
							</a>
							<a
								className={scss.link}
								href="#"
								target="_blank"
								aria-label="Link to WhatApp profile"
							>
								<WhatAppIcon />
							</a>
							<a
								className={scss.link}
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
