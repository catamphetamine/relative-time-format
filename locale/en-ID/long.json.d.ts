import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ID';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;