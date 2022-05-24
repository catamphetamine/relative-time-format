import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PN';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;