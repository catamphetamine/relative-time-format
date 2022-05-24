import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MW';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;