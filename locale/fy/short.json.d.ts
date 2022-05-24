import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fy';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;