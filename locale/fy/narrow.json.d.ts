import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fy';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;