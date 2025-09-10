import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ie';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;