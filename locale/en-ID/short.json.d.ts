import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ID';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;