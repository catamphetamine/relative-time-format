import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sq';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;