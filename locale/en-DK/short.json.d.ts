import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-DK';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;