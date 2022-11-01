import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mai';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;