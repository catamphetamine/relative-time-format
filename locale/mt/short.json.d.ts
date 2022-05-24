import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mt';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;