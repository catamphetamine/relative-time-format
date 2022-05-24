import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IM';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;