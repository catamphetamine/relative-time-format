import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'om';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;