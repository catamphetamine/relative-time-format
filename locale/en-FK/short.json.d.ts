import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FK';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;