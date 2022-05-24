import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fy';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;