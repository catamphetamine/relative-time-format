import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CA';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;