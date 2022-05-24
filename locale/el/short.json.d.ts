import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'el';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;