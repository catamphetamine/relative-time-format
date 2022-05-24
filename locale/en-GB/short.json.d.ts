import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GB';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;