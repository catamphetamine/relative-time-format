import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ca';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;