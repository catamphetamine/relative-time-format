import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IM';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;