import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TZ';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;