import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'xh';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;