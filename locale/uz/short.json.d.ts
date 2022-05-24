import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'uz';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;