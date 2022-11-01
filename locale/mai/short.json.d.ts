import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mai';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;